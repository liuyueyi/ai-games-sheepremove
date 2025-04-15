/**
 * 难度4-关卡29配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 29,
  name: '高级挑战-第29关',
  description: '挑战第29关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 8), // 使用前8种类型的卡片
  cardsPerType: 5,
  maxSlots: 7,
  timeLimit: 132,
  maxLayers: 6,
  difficulty: 4
};
