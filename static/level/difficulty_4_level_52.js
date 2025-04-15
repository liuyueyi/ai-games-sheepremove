/**
 * 难度4-关卡52配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 52,
  name: '高级挑战-第52关',
  description: '挑战第52关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 11), // 使用前11种类型的卡片
  cardsPerType: 6,
  maxSlots: 8,
  timeLimit: 109,
  maxLayers: 7,
  difficulty: 4
};
