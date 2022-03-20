select * from tbproduto;

select * from tbproduto where PRECO_LISTA between 16.007 and 16.009;
select * from tbproduto where PRECO_LISTA >= 16.007 and PRECO_LISTA <=16.009;

select * from tbcliente;
select * from tbcliente where IDADE>= 18 and idade <= 22;
select * from tbcliente where IDADE>= 18 and idade <= 22 and sexo = 'M';
select * from tbcliente where cIDADE= 'Rio de Janeiro' or bairro = 'Jardins';
select * from tbcliente where (IDADE>= 18 and idade <= 22 and sexo = 'M') or 
(cIDADE= 'Rio de Janeiro' or bairro = 'Jardins');
