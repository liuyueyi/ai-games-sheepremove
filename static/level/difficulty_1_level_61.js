/**
 * 难度1-关卡61配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 61,
  name: '新手入门-第61关',
  description: '挑战第61关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 10), // 使用前10种类型的卡片
  cardsPerType: 39,
  maxSlots: 10,
  timeLimit: 120,
  maxLayers: 7,
  difficulty: 1
};
