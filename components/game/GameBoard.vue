<template>
	<view class="game-board">
		<!-- 游戏头部信息 -->
		<view class="game-header">
			<view class="level-info" v-if="levelInfo">
				<text class="level-name">{{ levelInfo.name }}</text>
			</view>
			<view class="game-info">
				<text class="score-label">分数:</text>
				<text class="score-value">{{ score }}</text>
			</view>
			<view class="game-timer">
				<text class="timer-label">用时:</text>
				<text class="timer-value">{{ formatTime(gameTime) }}</text>
			</view>
			<view class="btn-group">
				<button class="btn-back" @tap="backToHome">返回</button>
			</view>
		</view>

		<!-- 游戏区域 -->
		<view class="game-area" :style="{ height: screenHeight * 2 / 3 + 'px' }">
			<!-- 卡片区域 -->
			<view class="cards-container" ref="cardsContainer">
				<view v-for="card in [...gameCards].sort((a, b) => a.zIndex - b.zIndex)" :key="card.id" class="card"
					:class="{
						'card-removed': card.isRemoved,
						'card-covered': isCardCovered(card),
						'card-available': !isCardCovered(card) && !card.isRemoved
					}" :style="{
						left: card.position.x + 'px',
						top: card.position.y + 'px',
						zIndex: card.zIndex
					}" @tap="selectCard(card)">
					<text class="card-icon">{{ card.icon }}</text>
				</view>
			</view>
		</view>



		<!-- 底部槽位区域 -->
		<view class="slots-area">
			<view v-for="(slot, index) in slots" :key="index" class="slot">
				<view v-if="slot" class="slot-card">
					<text class="card-icon">{{ slot.icon }}</text>
				</view>
			</view>
		</view>
		<view>
			<button class="btn-restart" @tap="restartGame">重新开始</button>
		</view>


		<!-- 游戏结果弹窗 -->
		<view class="game-result" v-if="gameStatus !== 'playing'">
			<view class="result-content">
				<text class="result-title">{{ gameStatus === 'win' ? '恭喜获胜!' : '游戏结束' }}</text>
				<text class="result-score">得分: {{ score }}</text>
				<text class="result-time">用时: {{ formatTime(gameTime) }}</text>
				<view class="result-buttons">
					<button class="btn-restart" @tap="restartGame">{{ gameStatus === 'win' ? '下一关' : '再玩一次' }}</button>
					<button class="btn-home" @tap="backToHome">返回首页</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { generateCards } from '../../utils/game/cards.js';
import { generateLayout } from '../../utils/game/layout-generator.js';
import { getDifficultyConfig } from '../../utils/game/difficulties.js';
import { loadLevelConfig, generateLevelCards, getNextLevel } from '../../utils/game/level-manager.js';

export default {
	props: {
		difficultyId: {
			type: Number,
			default: 1
		},
		levelNumber: {
			type: Number,
			default: 1
		}
	},
	computed: {
		// 计算屏幕高度，用于设置游戏区域高度为屏幕的2/3
		screenHeight() {
			return uni.getSystemInfoSync().windowHeight;
		},
		// 获取当前难度配置
		currentDifficulty() {
			return getDifficultyConfig(this.difficultyId);
		}
	},
	watch: {
		difficultyId: {
			handler() {
				this.initGame();
			},
			immediate: true
		},
		levelNumber: {
			handler() {
				this.initGame();
			},
		}
	},
	data() {
		return {
			// 游戏状态: 'playing', 'win', 'lose'
			gameStatus: 'playing',
			// 游戏卡片
			gameCards: [],
			// 底部槽位
			slots: [],
			// 分数
			score: 0,
			// 游戏时间（秒）
			gameTime: 0,
			// 剩余时间（秒）
			remainingTime: 180,
			// 定时器
			timer: null,
			// 卡片配置
			cardConfig: {
				containerWidth: uni.getSystemInfoSync().windowWidth, // 使用视口宽度
				containerHeight: uni.getSystemInfoSync().windowHeight * 0.6, // 使用视口高度的60%
				cardWidth: Math.min(uni.getSystemInfoSync().windowWidth, uni.getSystemInfoSync().windowHeight) * 0.2, // 使用较小边的20%作为卡片尺寸
				cardHeight: Math.min(uni.getSystemInfoSync().windowWidth, uni.getSystemInfoSync().windowHeight) * 0.2,
				maxLayers: 5,
				padding: Math.min(uni.getSystemInfoSync().windowWidth, uni.getSystemInfoSync().windowHeight) * 0.05 // 使用较小边的5%作为内边距
			},
			// 当前关卡编号
			currentLevelNumber: 1,
			// 难度信息
			difficultyInfo: null,
			// 关卡信息
			levelInfo: null
		};
	},
	mounted() {
		this.initGame();
	},
	beforeUnmount() {
		this.clearTimer();
	},
	methods: {
		// 初始化游戏
		async initGame() {
			// 获取关卡配置
			this.levelInfo = await loadLevelConfig(this.difficultyId, this.levelNumber);
			console.log('关卡配置:', this.levelInfo);

			// 重置游戏状态
			this.gameStatus = 'playing';
			this.score = 0;
			this.gameTime = 0;
			this.remainingTime = this.levelInfo.timeLimit;
			this.slots = Array(this.levelInfo.maxSlots).fill(null);

			// 生成关卡卡片
			const cards = generateLevelCards(this.levelInfo);

			// 获取游戏区域的实际尺寸
			let containerWidth = this.cardConfig.containerWidth;
			let containerHeight = this.cardConfig.containerHeight;

			// 使用uni-app的选择器API获取元素尺寸
			const query = uni.createSelectorQuery().in(this);
			query.select('.cards-container').boundingClientRect(data => {
				if (data) {
					containerWidth = data.width || containerWidth;
					containerHeight = data.height || containerHeight;

					// 更新卡片配置
					const updatedConfig = {
						...this.cardConfig,
						containerWidth,
						containerHeight,
						maxLayers: this.levelInfo.maxLayers,
						difficulty: this.levelInfo.difficulty // 添加难度系数，影响布局复杂度
					};

					// 生成布局
					this.gameCards = generateLayout(cards, updatedConfig);
					console.log('关卡' + JSON.stringify(this.levelInfo) + '生成的卡片数据效果', this.gameCards);
				} else {
					// 如果无法获取到元素尺寸，使用屏幕尺寸估算
					containerWidth = uni.getSystemInfoSync().windowWidth;
					containerHeight = this.screenHeight * 2 / 3;

					// 更新卡片配置
					const updatedConfig = {
						...this.cardConfig,
						containerWidth,
						containerHeight,
						maxLayers: this.levelInfo.maxLayers,
						difficulty: this.levelInfo.difficulty
					};

					// 生成布局
					this.gameCards = generateLayout(cards, updatedConfig);
					console.log('关卡' + JSON.stringify(this.levelInfo) + '生成的卡片数据效果', this.gameCards);
				}
			}).exec();

			// 启动定时器
			this.startTimer();
		},

		// 启动定时器
		startTimer() {
			this.clearTimer();
			this.timer = setInterval(() => {
				this.gameTime++;
				// 不再使用倒计时结束游戏，而是检查槽位是否已满
			}, 1000);
		},

		// 清除定时器
		clearTimer() {
			if (this.timer) {
				clearInterval(this.timer);
				this.timer = null;
			}
		},

		// 格式化时间
		formatTime(seconds) {
			const mins = Math.floor(seconds / 60);
			const secs = seconds % 60;
			return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
		},

		// 选择卡片
		selectCard(card) {
			// 如果游戏已结束或卡片已被移除，则不处理
			if (this.gameStatus !== 'playing' || card.isRemoved) {
				return;
			}

			// 检查卡片是否被其他卡片覆盖
			if (this.isCardCovered(card)) {
				return;
			}

			// 查找空槽位
			const emptySlotIndex = this.slots.findIndex(slot => slot === null);
			if (emptySlotIndex === -1) {
				// 槽位已满，游戏结束
				this.endGame('lose');
				return;
			}

			// 将卡片放入槽位
			this.slots[emptySlotIndex] = {
				id: card.id,
				typeId: card.typeId,
				icon: card.icon,
				name: card.name
			};

			// 标记卡片为已移除
			card.isRemoved = true;

			// 检查是否可以消除
			this.checkElimination();

			// 检查是否获胜
			this.checkWinCondition();

			// 检查游戏是否结束
			// 如果槽位已经填满，则表示游戏结束
			if (this.slots.every(slot => slot !== null)) {
				this.endGame('lose');
			}
		},

		// 检查卡片是否被其他卡片覆盖
		isCardCovered(card) {
			// 获取当前卡片的位置和尺寸
			const { x, y } = card.position;
			const { cardWidth, cardHeight } = this.cardConfig;

			// 检查是否有更高层级的卡片覆盖了当前卡片
			return this.gameCards.some(otherCard => {
				// 跳过自身和已移除的卡片
				if (otherCard.id === card.id || otherCard.isRemoved) {
					return false;
				}

				// 只检查更高层级的卡片
				if (otherCard.zIndex <= card.zIndex) {
					return false;
				}

				// 检查是否有重叠（交叉）
				const { x: otherX, y: otherY } = otherCard.position;
				const hasOverlap = (
					otherX < x + cardWidth &&
					otherX + cardWidth > x &&
					otherY < y + cardHeight &&
					otherY + cardHeight > y
				);

				// 如果有重叠，则认为卡片被覆盖
				return hasOverlap;
			});
		},

		// 检查是否可以消除
		checkElimination() {
			// 统计每种类型的卡片数量
			const typeCounts = {};
			this.slots.forEach(slot => {
				if (slot) {
					typeCounts[slot.typeId] = (typeCounts[slot.typeId] || 0) + 1;
				}
			});

			// 检查是否有三张相同类型的卡片
			let eliminated = false;
			Object.entries(typeCounts).forEach(([typeId, count]) => {
				if (count >= 3) {
					// 消除相同类型的卡片
					this.eliminateCards(parseInt(typeId));
					eliminated = true;
				}
			});

			// 如果有消除，增加分数
			if (eliminated) {
				this.score += 30;
			}
		},

		// 消除卡片
		eliminateCards(typeId) {
			// 找出所有相同类型的卡片索引
			const indices = [];
			this.slots.forEach((slot, index) => {
				if (slot && slot.typeId === typeId) {
					indices.push(index);
				}
			});

			// 从槽位中移除卡片（最多移除3张）
			indices.slice(0, 3).forEach(index => {
				this.slots[index] = null;
			});

			// 将右侧的卡片向左移动填补空位
			for (let i = 0; i < this.slots.length - 1; i++) {
				if (this.slots[i] === null) {
					// 从当前位置向右查找第一个非空槽位
					for (let j = i + 1; j < this.slots.length; j++) {
						if (this.slots[j] !== null) {
							// 将右侧卡片移动到空位
							this.slots[i] = this.slots[j];
							this.slots[j] = null;
							break;
						}
					}
				}
			}
		},

		// 检查是否获胜
		checkWinCondition() {
			// 检查是否所有卡片都已移除
			const allCardsRemoved = this.gameCards.every(card => card.isRemoved);

			// 如果所有卡片都已移除，游戏胜利
			if (allCardsRemoved) {
				this.endGame('win');
			}
		},

		// 结束游戏
		endGame(result) {
			this.gameStatus = result;
			this.clearTimer();

			// 如果胜利，增加额外分数
			if (result === 'win') {
				// 根据游戏时间增加额外分数（游戏时间越短，奖励越多）
				const timeBonus = Math.max(0, 300 - this.gameTime);
				this.score += Math.floor(timeBonus / 10) * 10;
			}

			// 触发游戏完成事件
			this.$emit('game-complete', {
				status: result,
				score: this.score,
				time: this.gameTime,
				levelId: this.levelId
			});
		},

		// 重新开始游戏或进入下一关
		restartGame() {
			if (this.gameStatus === 'win') {
				// 触发关卡完成事件，由父组件处理难度和关卡更新
				this.$emit('level-complete', {
					status: 'win',
					score: this.score,
					time: this.gameTime,
					levelId: this.levelId
				});
				// 初始化下一关
				// this.initGame();
			} else {
				// 重新开始当前关卡
				this.initGame();
			}
		},

		// 返回首页
		backToHome() {
			this.clearTimer();
			this.$emit('back-home');
		},

		// 洗牌功能
		shuffleCards() {
			// // 如果游戏已结束，不执行洗牌
			// if (this.gameStatus !== 'playing') {
			// 	return;
			// }

			// // 获取未移除的卡片
			// const activeCards = this.gameCards.filter(card => !card.isRemoved);

			// // 重新生成这些卡片的位置
			// const updatedConfig = {
			// 	...this.cardConfig,
			// 	containerWidth: uni.getSystemInfoSync().windowWidth,
			// 	containerHeight: this.screenHeight * 2/3
			// };

			// // 生成新的布局，但保持原有的层级关系
			// const newLayout = generateLayout(activeCards, updatedConfig);

			// // 更新卡片位置
			// activeCards.forEach((card, index) => {
			// 	card.position = newLayout[index].position;
			// });
		},
	}
};
</script>

<style>
.game-board {
	width: 100vw;
	display: flex;
	flex-direction: column;
	background-color: #f0f0f0;
}

/* 游戏头部 */
.game-header {
	height: 100rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20rpx;
	background-color: #ffffff;
	color: #333;
	box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.1);
	flex-wrap: wrap;
}

.level-info {
	display: flex;
	align-items: center;
	margin-right: 20rpx;
	background-color: rgba(76, 175, 80, 0.1);
	padding: 6rpx 16rpx;
	border-radius: 10rpx;
}

.level-label {
	font-size: 28rpx;
	font-weight: bold;
	margin-right: 10rpx;
}

.level-name {
	font-size: 28rpx;
}

.game-info,
.game-timer {
	display: flex;
	align-items: center;
}

.score-label,
.timer-label {
	font-size: 28rpx;
	margin-right: 10rpx;
}

.score-value,
.timer-value {
	font-size: 32rpx;
	font-weight: bold;
}

.btn-back {
	font-size: 24rpx;
	padding: 0 20rpx;
	height: 60rpx;
	line-height: 60rpx;
	background-color: #4CAF50;
	color: white;
	border-radius: 30rpx;
	box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.2);
	transition: all 0.3s ease;
}

.btn-restart {
	font-size: 34rpx;
	padding: 0 20rpx;
	margin-top: 20rpx;
	line-height: 80rpx;
	background-color: #4CAF50;
	color: white;
	border-radius: 30rpx;
	box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.2);
	transition: all 0.3s ease;
}

/* 游戏区域 */
.game-area {
	/* flex: 1; */
	position: relative;
	overflow: hidden;
	background-color: #e8f5e9;
	background-image: linear-gradient(to bottom right, #c8e6c9, #e8f5e9);
	box-shadow: inset 0 0 20px rgba(76, 175, 80, 0.1);
	border-radius: 20rpx;
	margin: 20rpx;
	padding: 20rpx;
}

.cards-container {
	width: 100%;
	height: 100%;
	position: relative;
}

/* 卡片样式 */
.card {
	position: absolute;
	width: calc(15vmin);
	height: calc(15vmin);
	background-color: #ffffff;
	border-radius: 2vmin;
	box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.3s ease;
	border: none;
	cursor: pointer;
}

.card:active {
	transform: scale(0.95);
	box-shadow: 0 2rpx 6rpx rgba(0, 0, 0, 0.2);
}

.card-removed {
	opacity: 0;
	transform: scale(0.8);
	pointer-events: none;
}

.card-covered {
	background-color: #b3e5fc;
	opacity: 0.8;
	border: 2px solid #81d4fa;
}

.card-available {
	background-color: #ffffff;
	border: 2px solid #4fc3f7;
	box-shadow: 0 4rpx 12rpx rgba(79, 195, 247, 0.4);
}

.card-icon {
	font-size: 54rpx;
}

/* 槽位区域 */
.slots-area {
	background-color: #8d6e63;
	background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23795548" opacity="0.1"/><path d="M0 0h100v10H0zM0 20h100v10H0zM0 40h100v10H0zM0 60h100v10H0zM0 80h100v10H0z" fill="%23000000" opacity="0.05"/></svg>');
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 20rpx;
	box-shadow: inset 0 4rpx 12rpx rgba(0, 0, 0, 0.2);
}

.slot {
	width: calc(12vmin);
	height: calc(15vmin);
	background-color: rgba(255, 255, 255, 0.15);
	border-radius: 2vmin;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: inset 0 2rpx 8rpx rgba(0, 0, 0, 0.2);
	border: 2rpx solid rgba(255, 255, 255, 0.2);
	margin: 0 10rpx;
}

.slot-card {
	width: 100%;
	height: 100%;
	background-color: white;
	border-radius: 10rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
	0% {
		transform: translateY(-20rpx);
		opacity: 0;
	}

	100% {
		transform: translateY(0);
		opacity: 1;
	}
}

/* 游戏结果弹窗 */
.game-result {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
}

.result-content {
	width: 80%;
	background-color: white;
	border-radius: 20rpx;
	padding: 40rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.2);
	animation: popIn 0.5s ease-out;
}

.result-title {
	font-size: 48rpx;
	font-weight: bold;
	color: #333;
	margin-bottom: 30rpx;
}

.result-score,
.result-time {
	font-size: 32rpx;
	color: #666;
	margin-bottom: 20rpx;
}


@keyframes popIn {
	0% {
		transform: scale(0.8);
		opacity: 0;
	}

	100% {
		transform: scale(1);
		opacity: 1;
	}
}

.btn-restart {
	background-color: #4CAF50;
	color: white;
}

.btn-home {
	background-color: #2196F3;
	color: white;
}

.result-buttons {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20rpx;
	margin-top: 30rpx;
	width: 100%;
}

.result-buttons button {
	flex: 1;
	max-width: 200rpx;
	height: 80rpx;
	line-height: 80rpx;
	font-size: 28rpx;
	border-radius: 40rpx;
	box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.2);
	transition: all 0.3s ease;
}

.control-buttons {
	height: 100rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20rpx;
	padding: 10rpx;
	background-color: #f5f5f5;
}

.btn-shuffle {
	width: 200rpx;
	height: 80rpx;
	line-height: 80rpx;
	background-color: #FF9800;
	color: white;
	border-radius: 40rpx;
	font-size: 28rpx;
	box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.2);
}

.control-buttons .btn-restart {
	width: 200rpx;
	height: 80rpx;
	line-height: 80rpx;
	background-color: #4CAF50;
	color: white;
	border-radius: 40rpx;
	font-size: 28rpx;
	box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.2);
}
</style>