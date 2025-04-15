/**
 * 难度5-关卡39配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 39,
  name: '大师级-第39关',
  description: '挑战第39关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 9), // 使用前9种类型的卡片
  cardsPerType: 39,
  maxSlots: 7,
  timeLimit: 122,
  maxLayers: 7,
  difficulty: 5
};
