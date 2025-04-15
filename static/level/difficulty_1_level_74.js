/**
 * 难度1-关卡74配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 74,
  name: '新手入门-第74关',
  description: '挑战第74关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 11), // 使用前11种类型的卡片
  cardsPerType: 6,
  maxSlots: 9,
  timeLimit: 120,
  maxLayers: 7,
  difficulty: 1
};
