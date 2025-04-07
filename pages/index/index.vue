<template>
	<view class="container">
		<!-- 首页 -->
		<view class="home" v-if="currentPage === 'home'">
			<image class="logo" src="/static/logo.jpg"></image>
			<view class="title-area">
				<text class="title">羊了个羊-垃圾版</text>
				<text class="subtitle">消除小游戏</text>
			</view>
			<view class="button-area">
				<button class="btn btn-start" @tap="selectLevel">选择关卡</button>
				<button class="btn btn-about" @tap="showAbout">关于游戏</button>
			</view>
		</view>
		
		<!-- 游戏页面 -->
		<view class="game" v-if="currentPage === 'game'">
			<game-board @back-home="goHome" />
		</view>
		
		<!-- 关于页面 -->
		<view class="about" v-if="currentPage === 'about'">
			<view class="about-content">
				<text class="about-title">关于游戏</text>
				<text class="about-text">羊了个羊是一款简单有趣的消除类游戏。</text>
				<text class="about-text">游戏规则：</text>
				<text class="about-text">1. 点击卡片将其放入底部槽位</text>
				<text class="about-text">2. 当槽位中有3个相同图案的卡片时，会自动消除</text>
				<text class="about-text">3. 槽位满了游戏结束</text>
				<text class="about-text">4. 消除所有卡片即可获胜</text>
				<button class="btn btn-back" @tap="goHome">返回首页</button>
			</view>
		</view>
	</view>
</template>

<script>
import GameBoard from '../../components/game/GameBoard.vue';

export default {
	components: {
		GameBoard
	},
	data() {
		return {
			currentPage: 'home' // home, game, about
		}
	},
	onLoad() {
		//
	},
	methods: {
		selectLevel() {
			uni.navigateTo({
				url: '/pages/level-select/level-select'
			});
		},
		startGame() {
			this.currentPage = 'game';
		},
		showAbout() {
			this.currentPage = 'about';
		},
		goHome() {
			this.currentPage = 'home';
		}
	}
}</script>

<style>
.container {
    width: 100vw;
    min-height: calc(100vh - var(--status-bar-height));
    background-color: #e8f5e9;
    background-image: linear-gradient(to bottom right, #c8e6c9, #e8f5e9);
}

.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40rpx;
}

.logo {
    width: 200rpx;
    height: 200rpx;
    margin: 60rpx 0;
    border-radius: 20rpx;
    box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
}

.title-area {
    text-align: center;
    margin-bottom: 80rpx;
}

.title {
    font-size: 72rpx;
    font-weight: bold;
    color: #4CAF50;
    text-shadow: 2rpx 2rpx 4rpx rgba(0, 0, 0, 0.1);
    display: block;
    margin-bottom: 20rpx;
}

.subtitle {
    font-size: 36rpx;
    color: #666;
    display: block;
}

.button-area {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 30rpx;
}

.btn {
    width: 100%;
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
    font-size: 36rpx;
    color: white;
    border-radius: 50rpx;
    background-color: #8d6e63;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23795548" opacity="0.1"/><path d="M0 0h100v10H0zM0 20h100v10H0zM0 40h100v10H0zM0 60h100v10H0zM0 80h100v10H0z" fill="%23000000" opacity="0.05"/></svg>');
    box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.btn:active {
    transform: scale(0.98);
    box-shadow: 0 2rpx 6rpx rgba(0, 0, 0, 0.2);
}

.btn-start {
    background-color: #4CAF50;
    background-image: linear-gradient(to bottom right, #66BB6A, #4CAF50);
}

.about-content {
    background-color: white;
    border-radius: 20rpx;
    padding: 40rpx;
    margin: 40rpx;
    box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
}

.about-title {
    font-size: 48rpx;
    font-weight: bold;
    color: #4CAF50;
    margin-bottom: 30rpx;
    display: block;
    text-align: center;
}

.about-text {
    font-size: 32rpx;
    color: #666;
    margin-bottom: 20rpx;
    display: block;
    line-height: 1.6;
}

.btn-back {
    margin-top: 40rpx;
}
</style>
