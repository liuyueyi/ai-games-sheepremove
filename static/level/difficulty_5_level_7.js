/**
 * 难度5-关卡7配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 7,
  name: '大师级-第7关',
  description: '挑战第7关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 6), // 使用前6种类型的卡片
  cardsPerType: 4,
  maxSlots: 6,
  timeLimit: 154,
  maxLayers: 4,
  difficulty: 5
};
