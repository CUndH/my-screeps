import CreepWork from "../CreepWork";

const roleHarvester = (creep) => {
  if (creep.memory.working) {
    // 把能量放到Spawn或Extension
    let target = creep.pos.findClosestByRange(FIND_MY_SPAWNS);
    CreepWork.transfer(creep, target, RESOURCE_ENERGY);
    if (creep.store[RESOURCE_ENERGY] == 0) {
      // 能量存放完毕后退出工作状态
      creep.memory.working = false;
    }
  } else {
    if (creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
      // 能量不够时去采集
      let target = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
      CreepWork.harvest(creep, target);
    } else {
      // 能量足够后进入工作状态
      creep.memory.working = true;
    }
  }
}

export default roleHarvester;