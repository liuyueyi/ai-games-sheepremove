/**
 * 难度4-关卡36配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 36,
  name: '高级挑战-第36关',
  description: '挑战第36关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 9), // 使用前9种类型的卡片
  cardsPerType: 36,
  maxSlots: 8,
  timeLimit: 125,
  maxLayers: 6,
  difficulty: 4
};
