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

<script>
import { useState, useContext, useRef, onMounted } from 'vue';
import { BalanceContext } from '../BalanceContext';

export default {
  setup() {
    const { balance, setBalance, transactionDone, setTransactionDone } = useContext(BalanceContext);
    const amount = useState(0);
    const amountRef = useRef(0);

    const addTransaction = () => {
      setTransaction('+', amount.value);
    };

    const subtractTransaction = () => {
      setTransaction('-', amount.value);
    };

    const setTransaction = (type, value) => {
      const id = Date.now();
      const newTransaction = { id, type, amount: Number(value) };
      setTransactionDone([newTransaction, ...transactionDone]);
      setBalance(type === '+' ? balance + Number(value) : balance - Number(value));
      amount.value = 0;
    };

    return {
      amount,
      addTransaction,
      subtractTransaction,
      transactionDone
    };
  }
};
</script>

<style scoped>
/* Estilos específicos para Transactions.vue */
</style>
