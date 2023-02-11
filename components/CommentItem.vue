<template>
    <div class="">
        <div class="card p-3">
            <div class="d-flex justify-content-between align-items-center">
                <div class="user d-flex flex-row align-items-center">
                    <div v-if="comment.username" class="user-img">{{ comment.username[0] }}</div>
                    <span>
                        <small class="font-weight-bold comment-text">{{ comment.text }}</small>
                    </span>
                </div>
                <small>2 days ago</small>
            </div>
            <div class="action d-flex justify-content-between mt-2 align-items-center">
                <div class="reply px-4">
                    <small>Remove</small>
                    <span class="dots"></span>
                    <small>Reply</small>
                    <span class="dots"></span>
                    <small>Translate</small>
                </div>
                <div class="rate-col">
                    <img :src="require('../assets/images/stars.png')" width="14"/>
                    <div class="comment-rate-col">{{ comment.rate }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            user:{}
        }
    },


    props:{
        comment:{}
    },
}
</script>


<style scoped>
body {
    background-color: #f7f6f6
}


small{
    color: #9a9a9a;
}
.card {

    border: none;
    box-shadow: 5px 6px 6px 2px #f6f6f6;
    border-radius: 4px;
}


.dots {

    height: 4px;
    width: 4px;
    margin-bottom: 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
}

.badge {

    padding: 7px;
    padding-right: 9px;
    padding-left: 16px;
    box-shadow: 5px 6px 6px 2px #e9ecef;
}
.rate-col{
    display: flex;
    align-items: center;
}

.comment-text{
    padding-left: 10px;
}

.comment-rate-col{
    color: #000;
    font-size: 14px;
}

.user-img {
    width: 30px;
    height: 30px;
    background-color: red;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4px;
}

.check-icon {

    font-size: 17px;
    color: #c3bfbf;
    top: 1px;
    position: relative;
    margin-left: 3px;
}

.form-check-input {
    margin-top: 6px;
    margin-left: -24px !important;
    cursor: pointer;
}


.form-check-input:focus {
    box-shadow: none;
}


.icons i {

    margin-left: 8px;
}

.reply {

    margin-left: 12px;
}

.reply small {

    color: #b7b4b4;

}


.reply small:hover {

    color: green;
    cursor: pointer;

}
</style>