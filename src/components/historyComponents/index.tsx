/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useEffect } from 'react';
import { getHistory, ItemHistorico } from '@/app/api/banckaccounthistory/action';

const filtroParaDescricao = {
  enviadas: 'SENT',
  recebidas: 'RECEIVED',
  depositos: 'DEPOSIT',
} as const;

const HistoricoCliente = ({
  historicoInicial,
}: {
  historicoInicial: ItemHistorico[];
}) => {
  const [filtro, setFiltro] = useState<
    | 'enviadas' | 'recebidas' | 'depositos'
  >('enviadas');
  const [historico, setHistorico] = useState<ItemHistorico[]>(historicoInicial);

  useEffect(() => {
    const fetch = async () => {
      if (filtro === 'enviadas') {
        setHistorico(historicoInicial);
      } else {
        const resultado = await getHistory(filtroParaDescricao[filtro]);
        setHistorico(resultado);
      }
    };

    fetch();
  }, [filtro]);

  return (
    <div className="my-8 text-center">
      <h1 className="text-[3rem] font-bold text-green-kpp">
        Histórico de Transferências
      </h1>

      <div className="flex justify-center gap-4 mt-6">
        {(['enviadas', 'recebidas', 'depositos'] as const).map(
          (tipo) => (
            <button
              key={tipo}
              onClick={() => setFiltro(tipo)}
              className={`px-4 py-2 rounded ${filtro === tipo ? 'bg-green-kpp text-white' : 'bg-gray-200'}`}
            >
              {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
            </button>
          ),
        )}
      </div>

      <div className="mt-10">
        {historico.length === 0 ? (
          <p className="text-[1.6rem] text-gray-500">
            Nenhum histórico encontrado.
          </p>
        ) : (
          <ul className="space-y-4">
            {historico.map((item, index) => (
              <li
                key={index}
                className="p-4 bg-white rounded shadow flex justify-between items-center text-[1.6rem]"
              >
                <div>
                  <p>
                    <strong>Tipo:</strong> {item.tipo}
                  </p>
                  <p>
                    <strong>Valor:</strong> R${' '}
                    {item.valor?.toFixed(2) ?? '0.00'}
                  </p>
                  <p>
                    <strong>Data:</strong>{' '}
                    {item.data
                      ? new Date(item.data).toLocaleDateString('pt-BR')
                      : 'N/A'}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Conta:</strong> {item.contaDestino}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HistoricoCliente;
