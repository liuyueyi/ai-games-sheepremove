/**
 * 游戏难度配置
 * 包含不同难度的基本信息
 */

/**
 * 难度配置数组
 * 每个难度包含以下属性：
 * - id: 难度ID
 * - name: 难度名称
 * - description: 难度描述
 * - unlockScore: 解锁所需的分数
 * - levelCount: 该难度下的关卡数量
 */
export const DIFFICULTIES = [
  {
    id: 1,
    name: '新手入门',
    description: '简单的入门难度，熟悉游戏规则',
    unlockScore: 0, // 初始难度，无需解锁
    levelCount: 100
  },
  {
    id: 2,
    name: '初级挑战',
    description: '增加一些难度，考验你的反应',
    unlockScore: 100, // 需要在新手难度获得100分才能解锁
    levelCount: 100
  },
  {
    id: 3,
    name: '中级挑战',
    description: '更多种类的卡片，更复杂的布局',
    unlockScore: 200,
    levelCount: 100
  },
  {
    id: 4,
    name: '高级挑战',
    description: '高难度挑战，考验你的眼力和记忆力',
    unlockScore: 300,
    levelCount: 100
  },
  {
    id: 5,
    name: '专家级',
    description: '最高难度，全部种类的卡片',
    unlockScore: 400,
    levelCount: 100
  }
];

/**
 * 获取难度配置
 * @param {Number} difficultyId 难度ID
 * @returns {Object} 难度配置对象
 */
export function getDifficultyConfig(difficultyId) {
  return DIFFICULTIES.find(difficulty => difficulty.id === difficultyId) || DIFFICULTIES[0];
}

/**
 * 获取已解锁的难度
 * @param {Number} score 当前总分数
 * @returns {Array} 已解锁的难度数组
 */
export function getUnlockedDifficulties(score) {
  return DIFFICULTIES.filter(difficulty => difficulty.unlockScore <= score);
}