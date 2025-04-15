/**
 * 难度1-关卡75配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 75,
  name: '新手入门-第75关',
  description: '挑战第75关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 11), // 使用前11种类型的卡片
  cardsPerType: 45,
  maxSlots: 9,
  timeLimit: 120,
  maxLayers: 7,
  difficulty: 1
};
