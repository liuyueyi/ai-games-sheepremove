/**
 * 难度1-关卡32配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 32,
  name: '新手入门-第32关',
  description: '挑战第32关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 7), // 使用前7种类型的卡片
  cardsPerType: 5,
  maxSlots: 7,
  timeLimit: 149,
  maxLayers: 5,
  difficulty: 1
};
