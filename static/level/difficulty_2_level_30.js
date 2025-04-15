/**
 * 难度2-关卡30配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 30,
  name: '初级挑战-第30关',
  description: '挑战第30关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 8), // 使用前8种类型的卡片
  cardsPerType: 24,
  maxSlots: 8,
  timeLimit: 131,
  maxLayers: 6,
  difficulty: 2
};
