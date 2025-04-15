/**
 * 难度1-关卡40配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 40,
  name: '新手入门-第40关',
  description: '挑战第40关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 7), // 使用前7种类型的卡片
  cardsPerType: 24,
  maxSlots: 7,
  timeLimit: 141,
  maxLayers: 6,
  difficulty: 1
};
