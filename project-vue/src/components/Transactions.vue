<template>
  <div>
    <input type="number" v-model="amount" />
    <button @click="addTransaction">Credito</button>
    <button @click="subtractTransaction">Debito</button>
    <div class='balance-list'>
      <div class='balance-header'>
        <h3>Quantidade</h3>
        <h3>Descrição</h3>
      </div>
      <div v-for="item in transactionDone" :key="item.id" class='balance-body'>
        <p>{{ item.type === 'debito' ? '+' : '-' }} {{ item.amount }}</p>
        <p>{{ item.type }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos específicos para Transactions.vue */
</style>
