/**
 * 难度5-关卡19配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 19,
  name: '大师级-第19关',
  description: '挑战第19关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 7), // 使用前7种类型的卡片
  cardsPerType: 27,
  maxSlots: 7,
  timeLimit: 142,
  maxLayers: 5,
  difficulty: 5
};
