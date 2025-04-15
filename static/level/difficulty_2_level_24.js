/**
 * 难度2-关卡24配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 24,
  name: '初级挑战-第24关',
  description: '挑战第24关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 8), // 使用前8种类型的卡片
  cardsPerType: 21,
  maxSlots: 8,
  timeLimit: 137,
  maxLayers: 5,
  difficulty: 2
};
