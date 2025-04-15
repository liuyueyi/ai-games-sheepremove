/**
 * 难度2-关卡32配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 32,
  name: '初级挑战-第32关',
  description: '挑战第32关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 9), // 使用前9种类型的卡片
  cardsPerType: 27,
  maxSlots: 8,
  timeLimit: 129,
  maxLayers: 6,
  difficulty: 2
};
