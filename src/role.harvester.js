const roleHarvester = (creep) => {
  if (creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
    let target = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
    if (creep.harvest(target) == ERR_NOT_IN_RANGE) {
      creep.moveTo(target);
    }
  } else {
    let target = creep.pos.findClosestByPath(FIND_MY_SPAWNS);
    if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
      creep.moveTo(target);
    }
  }
}

export default roleHarvester;