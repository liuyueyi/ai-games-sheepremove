/**
 * 难度4-关卡55配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 55,
  name: '高级挑战-第55关',
  description: '挑战第55关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 11), // 使用前11种类型的卡片
  cardsPerType: 6,
  maxSlots: 8,
  timeLimit: 106,
  maxLayers: 7,
  difficulty: 4
};
