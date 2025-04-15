/**
 * 批量生成关卡配置文件
 */

const fs = require('fs');
const path = require('path');

// 难度名称映射
const DIFFICULTY_NAMES = {
  1: '新手入门',
  2: '初级挑战',
  3: '中级进阶',
  4: '高级挑战',
  5: '大师级'
};

// 生成单个关卡配置文件
function generateLevelFile(difficulty, level) {
  // 根据难度和关卡计算参数
  let cardTypes = Math.min(4 + Math.floor((level - 1) / 10), 12); // 每10关增加一种卡片类型
  let cardsPerType = Math.min(3 + Math.floor((level - 1) / 15), 6); // 每15关增加一个卡片数量
  let maxSlots = Math.min(6 + Math.floor((level - 1) / 20), 10); // 每20关增加一个槽位
  let maxLayers = Math.min(3 + Math.floor((level - 1) / 12), 7); // 每12关增加一层
  let timeLimit = Math.max(120, 180 - (level - 1)); // 随关卡递增逐渐减少时间
  
  // 根据难度调整基础参数
  if (difficulty > 1) {
    cardTypes = Math.min(cardTypes + 2, 12);
    cardsPerType = Math.min(cardsPerType + 1, 6);
    maxLayers = Math.min(maxLayers + 1, 7);
    timeLimit = Math.max(90, timeLimit - 20);
  }
  
  const content = `/**
 * 难度${difficulty}-关卡${level}配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: ${level},
  name: '${DIFFICULTY_NAMES[difficulty]}-第${level}关',
  description: '挑战第${level}关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, ${cardTypes}), // 使用前${cardTypes}种类型的卡片
  cardsPerType: ${cardsPerType},
  maxSlots: ${maxSlots},
  timeLimit: ${timeLimit},
  maxLayers: ${maxLayers},
  difficulty: ${difficulty}
};
`;
  
  const filePath = path.join(__dirname, `difficulty_${difficulty}_level_${level}.js`);
  fs.writeFileSync(filePath, content, 'utf-8');
}

// 为每个难度生成100个关卡
for (let difficulty = 1; difficulty <= 5; difficulty++) {
  for (let level = 1; level <= 100; level++) {
    generateLevelFile(difficulty, level);
  }
}