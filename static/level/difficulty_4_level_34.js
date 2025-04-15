/**
 * 难度4-关卡34配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 34,
  name: '高级挑战-第34关',
  description: '挑战第34关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 9), // 使用前9种类型的卡片
  cardsPerType: 33,
  maxSlots: 8,
  timeLimit: 127,
  maxLayers: 6,
  difficulty: 4
};
