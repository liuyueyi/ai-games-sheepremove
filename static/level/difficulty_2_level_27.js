/**
 * 难度2-关卡27配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 27,
  name: '初级挑战-第27关',
  description: '挑战第27关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 8), // 使用前8种类型的卡片
  cardsPerType: 24,
  maxSlots: 7,
  timeLimit: 134,
  maxLayers: 6,
  difficulty: 2
};
