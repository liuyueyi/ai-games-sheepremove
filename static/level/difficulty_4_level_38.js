/**
 * 难度4-关卡38配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 38,
  name: '高级挑战-第38关',
  description: '挑战第38关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 9), // 使用前9种类型的卡片
  cardsPerType: 6,
  maxSlots: 7,
  timeLimit: 123,
  maxLayers: 7,
  difficulty: 4
};
