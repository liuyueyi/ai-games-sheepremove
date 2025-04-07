/**
 * 游戏数据管理工具
 */

export default {
  /**
   * 保存游戏结果
   * @param {number} difficultyId 难度ID
   * @param {number} levelNumber 关卡编号
   * @param {object} result 游戏结果 {score: number, status: string}
   */
  saveGameResult(difficultyId, levelNumber, result) {
    try {
      // 从本地存储加载游戏数据
      let gameData = uni.getStorageSync(`sheepremove_game_data_${difficultyId}`);
      gameData = gameData ? JSON.parse(gameData) : { totalScore: 0, maxLevel: 1, levelScores: {} };
      
      // 更新总分数
      gameData.totalScore += result.score;
      
      // 更新关卡最高分
      const levelKey = `${levelNumber}`;
      if (!gameData.levelScores[levelKey] || result.score > gameData.levelScores[levelKey]) {
        gameData.levelScores[levelKey] = result.score;
      }
      
      // 更新最大关卡
      gameData.maxLevel = Math.max(gameData.maxLevel, levelNumber + 1);

      // 保存更新后的游戏数据
      uni.setStorageSync(`sheepremove_game_data_${difficultyId}`, JSON.stringify(gameData));
      
      return true;
    } catch (e) {
      console.error('保存游戏结果失败', e);
      return false;
    }
  },
  
  /**
   * 加载游戏数据
   * @param {number} difficultyId 难度ID
   */
  loadGameData(difficultyId) {
    try {
      const gameData = uni.getStorageSync(`sheepremove_game_data_${difficultyId}`);
      return gameData ? JSON.parse(gameData) : { totalScore: 0, maxLevel: 1, levelScores: {} };
    } catch (e) {
      console.error('加载游戏数据失败', e);
      return { totalScore: 0, maxLevel: 1, levelScores: {} };
    }
  }
};