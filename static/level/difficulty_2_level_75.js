/**
 * 难度2-关卡75配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 75,
  name: '初级挑战-第75关',
  description: '挑战第75关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 12), // 使用前12种类型的卡片
  cardsPerType: 51,
  maxSlots: 10,
  timeLimit: 100,
  maxLayers: 7,
  difficulty: 2
};
