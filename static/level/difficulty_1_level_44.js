/**
 * 难度1-关卡44配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 44,
  name: '新手入门-第44关',
  description: '挑战第44关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 8), // 使用前8种类型的卡片
  cardsPerType: 27,
  maxSlots: 9,
  timeLimit: 137,
  maxLayers: 6,
  difficulty: 1
};
