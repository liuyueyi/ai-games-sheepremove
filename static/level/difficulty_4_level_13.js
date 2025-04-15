/**
 * 难度4-关卡13配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 13,
  name: '高级挑战-第13关',
  description: '挑战第13关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 7), // 使用前7种类型的卡片
  cardsPerType: 21,
  maxSlots: 6,
  timeLimit: 148,
  maxLayers: 5,
  difficulty: 4
};
