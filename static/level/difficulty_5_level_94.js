/**
 * 难度5-关卡94配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 94,
  name: '大师级-第94关',
  description: '挑战第94关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 12), // 使用前12种类型的卡片
  cardsPerType: 6,
  maxSlots: 10,
  timeLimit: 100,
  maxLayers: 7,
  difficulty: 5
};
