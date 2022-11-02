class Car {
  constructor({
    id,
    attribute: { brand, name, segment, fuelType, imageUrl },
    amount,
    createdAt
  }) {
    this.id = id;
    this.brand = brand;
    this.name = name;
    this.fuelType = fuelType;
    this.segment = segment;
    this.segmentText = this.#convertSegment(segment);
    this.fuelTypeText = this.#convertFuelType(fuelType);
    this.imageUrl = imageUrl;
    this.createdAt = createdAt;
    this.isNew = this.#newModelCheck(createdAt);
    this.amount = amount.toLocaleString();
  }

  #convertSegment(segment) {
    switch (segment) {
      case 'C':
        return '소형';
      case 'D':
        return '중형';
      case 'E':
        return '대형';
      case 'SUV':
        return 'SUV';
      default:
        return '정보 없음';
    }
  }

  #convertFuelType(fuelType) {
    switch (fuelType) {
      case 'gasoline':
        return '가솔린';
      case 'ev':
        return '전기';
      case 'hybrid':
        return '하이브리드';
      default:
        return '정보 없음';
    }
  }

  #newModelCheck(createdAt) {
    const current = Date.now();
    const past = +new Date(createdAt);
    const diff = current - past;
    const limit = 60 * 60 * 1000 * 24;
    return diff <= limit;
  }
}

export default Car;
