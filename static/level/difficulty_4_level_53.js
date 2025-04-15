/**
 * 难度4-关卡53配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 53,
  name: '高级挑战-第53关',
  description: '挑战第53关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 11), // 使用前11种类型的卡片
  cardsPerType: 45,
  maxSlots: 9,
  timeLimit: 108,
  maxLayers: 7,
  difficulty: 4
};
