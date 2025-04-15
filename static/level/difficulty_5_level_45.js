/**
 * 难度5-关卡45配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 45,
  name: '大师级-第45关',
  description: '挑战第45关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 10), // 使用前10种类型的卡片
  cardsPerType: 42,
  maxSlots: 9,
  timeLimit: 116,
  maxLayers: 7,
  difficulty: 5
};
