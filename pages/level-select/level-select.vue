<template>
	<view class="level-select">
		<view class="header">
			<text class="title">选择关卡</text>
			<button class="btn-back" @tap="goHome">返回</button>
		</view>
		
		<view class="levels-container">
			<view 
				v-for="level in levels" 
				:key="level.id"
				class="level-card"
				:class="{ 'level-locked': !isLevelUnlocked(level) }"
				@tap="selectLevel(level)"
			>
				<view class="level-header">
					<text class="level-id">{{ level.id }}</text>
					<text class="level-name">{{ level.name }}</text>
				</view>
				<view class="level-info">
					<text class="level-desc">{{ level.description }}</text>
					<view class="level-stats">
						<text class="level-stat">卡片类型: {{ level.cardTypes.length }}</text>
						<text class="level-stat">时间限制: {{ formatTime(level.timeLimit) }}</text>
						<text class="level-stat">难度: {{ '★'.repeat(level.difficulty) }}</text>
					</view>
				</view>
				<view class="level-status" v-if="!isLevelUnlocked(level)">
					<text class="lock-icon">🔒</text>
					<text class="unlock-text">需要 {{ level.unlockScore }} 分解锁</text>
				</view>
				<view class="level-status" v-else-if="getLevelHighScore(level.id) > 0">
					<text class="highscore-label">最高分:</text>
					<text class="highscore-value">{{ getLevelHighScore(level.id) }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { LEVELS, getUnlockedLevels } from '../../static/game/levels.js';

export default {
	data() {
		return {
			levels: LEVELS,
			totalScore: 0,
			levelScores: {}
		};
	},
	onLoad() {
		// 从本地存储加载游戏数据
		this.loadGameData();
	},
	methods: {
		// 加载游戏数据
		loadGameData() {
			try {
				const gameData = uni.getStorageSync('sheepremove_game_data');
				if (gameData) {
					const parsedData = JSON.parse(gameData);
					this.totalScore = parsedData.totalScore || 0;
					this.levelScores = parsedData.levelScores || {};
				}
			} catch (e) {
				console.error('加载游戏数据失败', e);
			}
		},
		
		// 保存游戏数据
		saveGameData() {
			try {
				const gameData = {
					totalScore: this.totalScore,
					levelScores: this.levelScores
				};
				uni.setStorageSync('sheepremove_game_data', JSON.stringify(gameData));
			} catch (e) {
				console.error('保存游戏数据失败', e);
			}
		},
		
		// 检查关卡是否已解锁
		isLevelUnlocked(level) {
			return this.totalScore >= level.unlockScore;
		},
		
		// 获取关卡最高分
		getLevelHighScore(levelId) {
			return this.levelScores[levelId] || 0;
		},
		
		// 选择关卡
		selectLevel(level) {
			if (!this.isLevelUnlocked(level)) {
				uni.showToast({
					title: `需要 ${level.unlockScore} 分才能解锁此关卡`,
					icon: 'none'
				});
				return;
			}
			
			// 将选中的关卡ID存储到全局状态
			getApp().globalData = getApp().globalData || {};
			getApp().globalData.selectedDifficultyId = level.id;
			
			// 跳转到游戏页面
			uni.navigateTo({
				url: '/pages/game/game'
			});
		},
		
		// 返回首页
		goHome() {
			uni.navigateBack();
		},
		
		// 格式化时间
		formatTime(seconds) {
			const mins = Math.floor(seconds / 60);
			const secs = seconds % 60;
			return `${mins}:${secs.toString().padStart(2, '0')}`;
		}
	}
};
</script>

<style>
.level-select {
	padding: 20rpx;
	background-color: #e8f5e9;
	min-height: 100vh;
}

.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 30rpx;
}

.title {
	font-size: 48rpx;
	font-weight: bold;
	color: #4CAF50;
}

.btn-back {
	font-size: 28rpx;
	padding: 10rpx 30rpx;
	background-color: #4CAF50;
	color: white;
	border-radius: 30rpx;
}

.levels-container {
	display: flex;
	flex-direction: column;
	gap: 30rpx;
}

.level-card {
	background-color: white;
	border-radius: 20rpx;
	padding: 30rpx;
	box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease;
}

.level-card:active {
	transform: scale(0.98);
	box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.2);
}

.level-locked {
	background-color: #f5f5f5;
	opacity: 0.8;
}

.level-header {
	display: flex;
	align-items: center;
	margin-bottom: 20rpx;
}

.level-id {
	width: 60rpx;
	height: 60rpx;
	background-color: #4CAF50;
	color: white;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	margin-right: 20rpx;
}

.level-name {
	font-size: 36rpx;
	font-weight: bold;
	color: #333;
}

.level-info {
	margin-bottom: 20rpx;
}

.level-desc {
	font-size: 28rpx;
	color: #666;
	margin-bottom: 20rpx;
	display: block;
}

.level-stats {
	display: flex;
	flex-wrap: wrap;
	gap: 20rpx;
}

.level-stat {
	font-size: 24rpx;
	color: #888;
	background-color: #f0f0f0;
	padding: 10rpx 20rpx;
	border-radius: 20rpx;
}

.level-status {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-top: 20rpx;
}

.lock-icon {
	font-size: 32rpx;
	margin-right: 10rpx;
}

.unlock-text {
	font-size: 24rpx;
	color: #ff9800;
}

.highscore-label {
	font-size: 24rpx;
	color: #666;
	margin-right: 10rpx;
}

.highscore-value {
	font-size: 32rpx;
	color: #4CAF50;
	font-weight: bold;
}
</style>