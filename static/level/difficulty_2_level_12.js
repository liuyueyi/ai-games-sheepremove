/**
 * 难度2-关卡12配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 12,
  name: '初级挑战-第12关',
  description: '挑战第12关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 7), // 使用前7种类型的卡片
  cardsPerType: 4,
  maxSlots: 6,
  timeLimit: 149,
  maxLayers: 4,
  difficulty: 2
};
