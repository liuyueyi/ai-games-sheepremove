/**
 * 难度1-关卡58配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 58,
  name: '新手入门-第58关',
  description: '挑战第58关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 9), // 使用前9种类型的卡片
  cardsPerType: 36,
  maxSlots: 8,
  timeLimit: 123,
  maxLayers: 7,
  difficulty: 1
};
