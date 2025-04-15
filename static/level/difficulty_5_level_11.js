/**
 * 难度5-关卡11配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 11,
  name: '大师级-第11关',
  description: '挑战第11关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 7), // 使用前7种类型的卡片
  cardsPerType: 4,
  maxSlots: 6,
  timeLimit: 150,
  maxLayers: 4,
  difficulty: 5
};
