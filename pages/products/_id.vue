<template>
    <div class="detail">
        <div class="card">
            <div v-if="response.image" class="card-product-image">
                <img :src="response.image" />
            </div>
            <div class="product-xususiyatlar">
                <div class="product-title">
                    {{ response.title }}
                </div>
                <div class="">
                    <div class="product-about">     

                    </div>
                    <div class="product-about-text">
                        {{ response.text }}
                    </div>
                </div>

                <div class="xususiyatlar-title">
                    Основные характеристики
                </div>
                <div class="xususiyatlar-rangi">
                    <div class="xususiyatlar-rangi-flex">
                        <div class="xususiyatlar-rangi-title">
                            Цвет корпуса:
                        </div>
                        <div class="xususiyatlar-rangi-text">
                            black
                        </div>
                    </div>
                </div>
                <div class="xususiyatlar-rangi">
                    <div class="xususiyatlar-rangi-flex">
                        <div class="xususiyatlar-rangi-title">
                            Цвет дверцы:
                        </div>
                        <div class="xususiyatlar-rangi-text">
                            black
                        </div>
                    </div>
                </div>
                <div class="xususiyatlar-rangi">
                    <div class="xususiyatlar-rangi-flex">
                        <div class="xususiyatlar-rangi-title">
                            Объем морозильной камеры НЕТТО:
                        </div>
                        <div class="xususiyatlar-rangi-text">
                            237 л
                        </div>
                    </div>
                </div>
                <div class="xususiyatlar-rangi">
                    <div class="xususiyatlar-rangi-flex">
                        <div class="xususiyatlar-rangi-title">
                            Способ установки:
                        </div>
                        <div class="xususiyatlar-rangi-text">
                            отдельностоящая
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="detail-posts">
            <div class="detail-posts-content">
                <div class="post-title">
                    Comments
                </div>
                <div class="detail-posts-content-text">
                    Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem
                    Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а
                    также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации
                    "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и
                    редакторы HTML используют Lorem Ipsum в качестве
                </div>
                <div class="">

                </div>
                <div class="">

                </div>
            </div>
            <div v-if="user" class="comment-create">
                <form>
                    <div class="d-flex flex-start w-100">
                        <!-- <div class="rounded-circle shadow-1-strong me-3"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width="40"
                            height="40">{{ }}</div> -->
                        <div class="form-outline w-100">
                            <textarea class="form-control" id="textAreaExample" rows="4" placeholder="Message"
                                v-model="comment" style="background: #fff;"></textarea>
                        </div>
                    </div>
                    <div class="rate-and-postButton">
                        <div class="circle-rate">
                            <div @click="rateState(rate)" v-for="rate in 5" class="circle-color" :key="rate"
                                :class="rate === rateNumber ? 'active' : ''">
                                {{ rate }}
                            </div>
                            ?
                        </div>
                        <button @click.prevent="commentPost" class="btn btn-primary px-3 py-2">
                            Post comment
                        </button>

                    </div>
                </form>
            </div>
            <div class="comments">
                <div v-for="comment of res.comments" :key="comment.id" class="my-4">
                    <CommentItem :comment="comment" />
                </div>
            </div>
        </div>
    </div>
</template>
<script >

import CommentItem from '../../components/CommentItem.vue'
export default {

    components: {
        CommentItem
    },

    data() {
        return {
            productid: null,
            comment: '',
            rateNumber: '',
            user:{},
            comments:[]
        }
    },

    async asyncData({ $axios, params }) {
        const response = await $axios.$get('http://localhost:4000/api/products/' + params.id)
        const res = await $axios.$get(`http://localhost:4000/api/comments?product_id=${params.id}`)
        console.log(res)
        return { response, res}
    },

    methods: {
        rateState(rate) {
            this.rateNumber = rate
        },
        commentPost() {
            const commentRateForm = {
                rate: this.rateNumber,
                text: this.comment,
                product_id: this.response.id
            };
            var token = localStorage.getItem('token')
            console.log(token)
            const config = {
                headers: { 'Authorization': `Bearer ${token}` }
            }

            this.$axios.post('http://localhost:4000/api/comments', commentRateForm, config)
                .then((responsel) => {
                    responsel.data
                    console.log(responsel.data);
                })
            this.comment = '',
            this.rateNumber = ''

        }
    },

    mounted() {
        const user = JSON.parse(localStorage.getItem('user'))
        this.user = user
    }




}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

.detail {
    height: 100%;
    /* background-color: rgb(54, 66, 80); */
    background-color: #ffffff;
    display: flex;
    justify-content: center;
}

.detail-posts {
    /* background-color: rgb(61, 77, 95); */
    background-color: #fbfbfb;
    border-radius: 8px;
    width: 60%;
    margin: 20px 0 0 20px;
    padding: 20px;
}

.card {
    width: 400px;
    height: 120vh;
    margin: 20px 0;
    /* background-color: rgb(61, 77, 95); */
    background-color: #fbfbfb;
    border: none;
    border-radius: 8px;
    
    display: flex;
    flex-direction: column;
    float: inline-start;
    text-align: start;
    overflow: hidden;
}

.product-xususiyatlar {
    text-align: start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
}

.product-title {
    font-size: 24px;
    /* color: #ffffff; */
    color: #000;
    padding: 10px 0;
}

.product-about {
    font-size: 20px;
    /* color: #ffffff; */
    color: #000;
}

.product-about-text {
    /* color: #dadada; */
    color: #000;
    font-size: 14px;
    padding: 4px 0 40px 0;
}

.xususiyatlar-title {
    font-size: 20px;
    color: #000;
    /* color: #ffffff; */

}

.xususiyatlar-rangi-flex {
    display: flex;
    justify-content: space-between;
}

.xususiyatlar-rangi {
    width: 100%;
    padding: 20px 0;
}

.xususiyatlar-rangi-title {
    /* color: #dadada; */
    color: #414141;
}

.xususiyatlar-rangi-text {
    color: #606060;
}

.card-product-image {
    width: 500px;
}
.card-product-image img {
    height: 500px;
}

.detail-posts-content {}

.post-title {
    font-size: 28px;
    /* color: #fff; */
    color: #000;
    font-weight: 700;
}

textarea::placeholder {
    color: rgb(55, 0, 255);
    padding: 4px;
}

.rate-and-postButton {
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.circle-rate {
    display: flex;
    align-items: center;
    color: #000;
}

.circle-color {
    background: rgb(226, 226, 226);
    border-radius: 8px;
    color: #000;
    font-size: 14px;
    width: 32px;
    margin: 0 10px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.circle-color.active {
    background: rgb(255, 191, 0);
    border-radius: 8px;
    color: #fff;
    width: 32px;
    margin: 0 10px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.circle-color:hover {
    background: rgb(255, 191, 0);
    border-radius: 8px;
    color: #fff;
    width: 32px;
    margin: 0 10px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s ease;
}

.comment-create {
    padding: 50px 0;
}

.detail-posts-content-text {
    line-height: 40px;
    color: #000;
}
</style>