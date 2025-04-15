/**
 * 难度5-关卡80配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 80,
  name: '大师级-第80关',
  description: '挑战第80关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 12), // 使用前12种类型的卡片
  cardsPerType: 63,
  maxSlots: 10,
  timeLimit: 100,
  maxLayers: 7,
  difficulty: 5
};
