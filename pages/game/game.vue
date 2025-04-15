<template>
	<view class="game-page">
		<game-board 
			:difficulty-id="difficultyId" 
			:level-number="levelNumber" 
			@back-home="goBack" 
			@game-complete="onGameComplete"
			@level-complete="onLevelComplete"
		/>
	</view>
</template>

<script>
import GameBoard from '../../components/game/GameBoard.vue';
import GameDataUtils from '../../utils/GameDataUtils.js';

export default {
	components: {
		GameBoard
	},
	data() {
		return {
			difficultyId: 1, // 默认为第一个难度
			levelNumber: 1 // 默认为第一关
		};
	},
	onLoad() {
		// 从全局状态获取选中的难度ID
		if (getApp().globalData && getApp().globalData.selectedDifficultyId) {
			this.difficultyId = getApp().globalData.selectedDifficultyId;
		}
		
		// 优先使用本地存储的游戏进度数据来设置关卡编号
		const gameData = GameDataUtils.loadGameData(this.difficultyId);
		this.levelNumber = gameData.maxLevel;
		
		// 如果全局状态中有选中的关卡编号，则覆盖本地存储的进度
		if (getApp().globalData && getApp().globalData.selectedLevelNumber) {
			this.levelNumber = getApp().globalData.selectedLevelNumber;
		}
	},
	methods: {
		// 返回关卡选择页面
		goBack() {
			uni.navigateBack();
		},
		
		// 游戏完成回调
		onGameComplete(result) {
			// 保存游戏结果
			this.saveGameResult(result);
			
			// // 显示结果提示
			// setTimeout(() => {
			// 	if (result.status === 'win') {
			// 		uni.showToast({
			// 			title: '恭喜通关！',
			// 			icon: 'success',
			// 			duration: 2000
			// 		});
			// 	}
			// }, 500);
		},
		
		// 保存游戏结果
		saveGameResult(result) {
			GameDataUtils.saveGameResult(this.difficultyId, this.levelNumber, result);
		},
		
		// 关卡完成回调 - 处理关卡完成后的逻辑
		onLevelComplete(result) {
			// 保存当前关卡的游戏结果
			this.saveGameResult(result);
			console.log('onLevelComplete', result);
			
			// 导入关卡管理器
			import('../../utils/game/level-manager.js').then(module => {
				const { getNextLevel } = module;
				
				// 获取下一关信息
				const nextLevel = getNextLevel(this.difficultyId, this.levelNumber);
				
				// 如果有下一关，更新难度和关卡编号
				if (nextLevel.difficultyId !== this.difficultyId || nextLevel.levelNumber !== this.levelNumber) {
					// 更新当前难度和关卡编号
					this.difficultyId = nextLevel.difficultyId;
					this.levelNumber = nextLevel.levelNumber;
					
					// // 显示下一关提示
					// uni.showToast({
					// 	title: `进入${nextLevel.difficultyId === this.difficultyId ? '下一关' : '下一难度'}！`,
					// 	icon: 'success',
					// 	duration: 1500
					// });
				} else {
					// 如果没有下一关，显示通关提示
					uni.showToast({
						title: '恭喜通关全部关卡！',
						icon: 'success',
						duration: 2000
					});
				}
			});
		}
	}
};
</script>

<style>
.game-page {
	width: 100%;
	height: 100vh;
	background-color: #e8f5e9;
}
</style>