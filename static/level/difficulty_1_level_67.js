/**
 * 难度1-关卡67配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 67,
  name: '新手入门-第67关',
  description: '挑战第67关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 10), // 使用前10种类型的卡片
  cardsPerType: 42,
  maxSlots: 9,
  timeLimit: 120,
  maxLayers: 7,
  difficulty: 1
};
