/**
 * 游戏布局生成器
 * 用于生成羊了个羊游戏的卡片布局
 */

/**
 * 生成游戏布局
 * @param {Array} cards 卡片数据数组
 * @param {Object} config 布局配置
 * @returns {Array} 带有位置信息的卡片数组
 */
export function generateLayout(cards, config = {}) {
  const {
    containerWidth = 750, // 容器宽度，单位px
    containerHeight = 1000, // 容器高度，单位px
    cardWidth = 80, // 卡片宽度，单位px
    cardHeight = 80, // 卡片高度，单位px
    maxLayers = 5, // 最大层数
    overlapRatio = 0.2, // 重叠比例
    padding = 20, // 容器内边距，确保卡片不会贴边
    cardGap = 4, // 卡片之间的间隔，增加立体感
    elevation = 2 // 卡片立体高度基准值，单位px
  } = config;
  console.log('generateLayout', config);

  // 复制卡片数组，避免修改原数组
  const layoutCards = [...cards];
  // 打乱卡片顺序
  shuffleArray(layoutCards);
  
  // 计算每层可放置的卡片数量
  const totalCards = layoutCards.length;
  const cardsPerLayer = Math.ceil(totalCards / maxLayers);
  
  // 计算可用区域（确保卡片完全在容器内，不会被截断）
  // 添加内边距确保卡片不会贴近边缘
  const usableWidth = containerWidth - (padding * 2);
  const usableHeight = containerHeight - (padding * 2);
  
  // 计算网格系统，网格大小等于卡片大小
  const gridWidth = cardWidth;
  const gridHeight = cardHeight;
  
  // 计算可用网格数量，因为下一层与上一层有1/2个卡片大小的偏移，所以在结算时要减去1/2个卡片大小
  let gridCols = Math.floor(usableWidth / (gridWidth + cardGap)) - 1;
  let gridRows = Math.floor(usableHeight / (gridHeight + cardGap)) - 1;

  const offsetTop = (usableHeight - gridRows * (gridHeight + cardGap)) / 4;
  const offsetLeft = (usableWidth - gridCols * (gridWidth + cardGap)) / 4;
  
  console.log('gridCols', containerWidth, cardWidth, usableWidth, gridWidth, gridCols);
  console.log('gridRows', usableHeight, gridHeight, gridRows);
  // 用于记录每一层已使用的网格点
  const usedGridPoints = new Map();

  // 为每张卡片分配位置和层级
  for (let i = 0; i < layoutCards.length; i++) {
    const card = layoutCards[i];
    const layer = Math.floor(i / cardsPerLayer);
    
    // 设置卡片层级
    card.zIndex = layer;
    
    // 计算层偏移量，相邻层偏移量相差1/2个卡片大小
    // 偶数层没有偏移，奇数层偏移1/2个卡片大小
    const layerOffsetX = (layer % 2) * (gridWidth / 2);
    const layerOffsetY = (layer % 2) * (gridHeight / 2);
    
    // 获取当前层已使用的网格点
    if (!usedGridPoints.has(layer)) {
      usedGridPoints.set(layer, new Set());
    }
    const layerUsedPoints = usedGridPoints.get(layer);
    
    // 在网格系统中选择一个未使用的网格点
    let gridX, gridY;
    do {
      gridX = Math.floor(Math.random() * gridCols);
      gridY = Math.floor(Math.random() * gridRows);
    } while (layerUsedPoints.has(`${gridX},${gridY}`));
    
    // 记录已使用的网格点
    layerUsedPoints.add(`${gridX},${gridY}`);
    
    // 将网格坐标转换为像素坐标，并添加内边距和层偏移量
    // 添加cardGap使卡片之间有间隔，增加立体感
    const x = gridX * (gridWidth + cardGap) + padding + layerOffsetX + offsetLeft;
    const y = gridY * (gridHeight + cardGap) + padding + layerOffsetY + offsetTop;

    // console.log(`初始化卡片信息： ${layer}-${card.id} size=${gridWidth} gridX=${gridX} gridY=${gridY}, x=${x} y=${y} text=${card.icon}`);
    
    // 为每层卡片添加立体高度属性
    const cardElevation = layer * elevation;
    
    card.position = { x, y };
    card.elevation = cardElevation; // 添加立体高度属性
  }
  
  // 检查并调整卡片重叠情况
//   adjustCardOverlap(layoutCards, { cardWidth, cardHeight, overlapRatio, usableWidth, usableHeight, padding });

  
  return layoutCards;
}

/**
 * 调整卡片重叠情况
 * 确保高层级的卡片至少有一部分是可点击的
 * 同时保持卡片位置在网格点上
 */
function adjustCardOverlap(cards, config) {
  const { cardWidth, cardHeight, overlapRatio, usableWidth, usableHeight, padding, cardGap = 4 } = config;
  const minVisibleWidth = cardWidth * (1 - overlapRatio);
  const minVisibleHeight = cardHeight * (1 - overlapRatio);
  
  // 保持网格系统与generateLayout函数一致
  const gridWidth = cardWidth;
  const gridHeight = cardHeight;
  
  // 按层级从低到高排序
  cards.sort((a, b) => a.zIndex - b.zIndex);
  
  // 检查每张卡片是否被完全覆盖
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    
    // 检查当前卡片是否被更高层级的卡片完全覆盖
    for (let j = i + 1; j < cards.length; j++) {
      const higherCard = cards[j];
      if (higherCard.zIndex <= card.zIndex) continue;
      
      // 如果高层级卡片完全覆盖了当前卡片，调整位置
      if (isCompletelyOverlapped(card, higherCard, { cardWidth, cardHeight })) {
        // 计算需要移动的最小网格单位数
        const gridMoveX = Math.ceil(minVisibleWidth / gridWidth);
        const gridMoveY = Math.ceil(minVisibleHeight / gridHeight);
        
        // 计算当前卡片和高层级卡片的网格位置
        const cardGridX = Math.floor((card.position.x - padding) / (gridWidth + cardGap));
        const cardGridY = Math.floor((card.position.y - padding) / (gridHeight + cardGap));
        
        // 计算新的网格位置，确保移动整数个网格单位
        const newGridX = cardGridX + gridMoveX;
        const newGridY = cardGridY + gridMoveY;
        
        // 计算层偏移量，保持相邻层的1/2卡片大小偏移
        const layerOffsetX = (higherCard.zIndex % 2) * (gridWidth / 2);
        const layerOffsetY = (higherCard.zIndex % 2) * (gridHeight / 2);
        
        // 确保调整后的位置不会导致卡片超出容器边界
        const maxGridX = Math.floor(usableWidth / (gridWidth + cardGap));
        const maxGridY = Math.floor(usableHeight / (gridHeight + cardGap));
        
        const finalGridX = Math.min(Math.max(newGridX, 0), maxGridX);
        const finalGridY = Math.min(Math.max(newGridY, 0), maxGridY);
        
        // 将网格位置转换回像素坐标，并添加层偏移量
        higherCard.position.x = finalGridX * (gridWidth + cardGap) + padding + layerOffsetX;
        higherCard.position.y = finalGridY * (gridHeight + cardGap) + padding + layerOffsetY;
      }
    }
  }
}

/**
 * 检查卡片是否被完全覆盖
 */
function isCompletelyOverlapped(card, higherCard, { cardWidth, cardHeight }) {
  const { x: x1, y: y1 } = card.position;
  const { x: x2, y: y2 } = higherCard.position;
  
  return (
    x2 <= x1 &&
    y2 <= y1 &&
    x2 + cardWidth >= x1 + cardWidth &&
    y2 + cardHeight >= y1 + cardHeight
  );
}

/**
 * 打乱数组顺序
 * @param {Array} array 要打乱的数组
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}