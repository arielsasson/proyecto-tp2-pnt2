<template>
    <div class="wrapper">
        <div class="item">
            <div class="item-parent">
                <p>Parent</p>
            </div>
            <div class="item-childrens">
                <div class="item-child">
                    <div class="item">
                        <div class="item-parent">
                            <p>Parent</p>
                        </div>
                        <div class="item-childrens">
                            <div class="item-child">
                                <div class="item">
                                    <div class="item-parent">
                                        <p>Parent</p>
                                    </div>
                                    <div class="item-childrens">
                                        <div class="item-child">
                                            <p>child 1</p>
                                        </div>
                                        <div class="item-child">
                                            <p>child 2</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item-child">
                                <p>child 2</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item-child">
                    <div class="item">
                        <div class="item-parent">
                            <p>Parent</p>
                        </div>
                        <div class="item-childrens">
                            <div class="item-child">
                                <div class="item">
                                    <div class="item-parent">
                                        <p>Parent</p>
                                    </div>
                                    <div class="item-childrens">
                                        <div class="item-child">
                                            <p>child 1</p>
                                        </div>
                                        <div class="item-child">
                                            <p>child 2</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item-child">
                                <p>child 2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
/* body {
    background-color: aqua;
    height: 100%;
} */
.wrapper {
    display: flex;
    justify-content: center;
}
.item {
    display: flex;
    flex-direction: row-reverse;
}
.item-parent {
    position: relative;
    margin-left: 50px;
    display: flex;
    align-items: center;
}
.item-parent:after {
    position: absolute;
    content: '';
    width: 25px;
    height: 2px;
    left: 0;
    top: 50%;
    background-color: #fff;
    transform: translateX(-100%);
}
.item-childrens {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.item-child {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    margin-top: 10px;
    margin-bottom: 10px;
    position: relative;
}
.item-child:before {
    content: '';
    position: absolute;
    background-color: #fff;
    right: 0;
    top: 50%;
    transform: translateX(100%);
    width: 25px;
    height: 2px;
}
.item-child:after {
    content: '';
    position: absolute;
    background-color: #fff;
    right: -25px;
    height: calc(50% + 22px);
    width: 2px;
    top: 50%;
}
.item-child:last-child:after {
    transform: translateY(-100%);
}
.item-child:only-child:after {
    display: none;
}
</style>