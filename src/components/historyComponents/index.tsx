/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useEffect } from 'react';
import { getHistory } from '@/app/api/banckaccounthistory/action';
import { BankAccountAccountHistory } from '@/types/bankAccountHistory';

const filtroParaDescricao = {
  enviadas: 'SENT',
  recebidas: 'RECEIVED',
  depositos: 'DEPOSIT',
} as const;

const HistoricoCliente = ({
  historicoInicial,
}: {
  historicoInicial: BankAccountAccountHistory[];
}) => {
  const [filtro, setFiltro] = useState<'enviadas' | 'recebidas' | 'depositos'>(
    'enviadas',
  );
  const [historico, setHistorico] =
    useState<BankAccountAccountHistory[]>(historicoInicial);

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
        {(['enviadas', 'recebidas', 'depositos'] as const).map((tipo) => (
          <button
            key={tipo}
            onClick={() => setFiltro(tipo)}
            className={`px-4 py-2 rounded ${filtro === tipo ? 'bg-green-kpp text-white' : 'bg-gray-200'}`}
          >
            {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
          </button>
        ))}
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
                    <strong>Tipo:</strong> {item.transfer_type}
                  </p>
                  <p>
                    <strong>Valor:</strong> R$ {item.transfer_value}
                  </p>
                  <p>
                    <strong>Data:</strong>{' '}
                    {item.date_transfer
                      ? new Date(item.date_transfer).toLocaleDateString('pt-BR')
                      : '25/05/2025'}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>
                      {filtro === 'recebidas'
                        ? 'CPF remetente:'
                        : 'CPF destinatário:'}
                    </strong>{' '}
                    {filtro === 'recebidas'
                      ? item.cpf_sender
                      : item.cpf_recipient}
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
