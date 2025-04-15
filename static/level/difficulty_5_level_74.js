/**
 * 难度5-关卡74配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 74,
  name: '大师级-第74关',
  description: '挑战第74关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 12), // 使用前12种类型的卡片
  cardsPerType: 60,
  maxSlots: 9,
  timeLimit: 100,
  maxLayers: 7,
  difficulty: 5
};
