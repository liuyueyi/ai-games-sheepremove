/**
 * 难度1-关卡53配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 53,
  name: '新手入门-第53关',
  description: '挑战第53关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 9), // 使用前9种类型的卡片
  cardsPerType: 6,
  maxSlots: 8,
  timeLimit: 128,
  maxLayers: 7,
  difficulty: 1
};
