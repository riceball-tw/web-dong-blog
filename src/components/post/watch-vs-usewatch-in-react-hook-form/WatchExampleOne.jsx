import { useForm } from 'react-hook-form';

export default function WatchExampleOne() {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      paymentMethod: 'cashOnDelivery',
    },
  });
  const [paymentMethod] = watch(['paymentMethod']);

  return (
    <form className="text-white" onSubmit={handleSubmit((data) => console.log(data))}>
      <label>
        <span className="mr-2 inline-block">付款方式：</span>
        <select className="text-primary-800" {...register('paymentMethod')}>
          <option value="cashOnDelivery">貨到付款</option>
          <option value="creditCard">信用卡</option>
        </select>
      </label>
      {paymentMethod === 'creditCard' && (
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            <label>
              信用卡卡號
              <input className="block w-full text-primary-800" {...register('creditCardNumber')} />
            </label>
            <label>
              安全碼
              <input className="block w-full text-primary-800" {...register('creditCardSafeCode')} />
            </label>
          </div>
          <label>有效期限</label>
          <div className="flex gap-2">
            {/* Year */}
            <select className="text-primary-800">
              <option selected disabled value="">
                ---
              </option>
              {[...Array(25)].map((_, i) => {
                const currentYear = new Date().getFullYear();
                return <option value={currentYear + i}>{currentYear + i}</option>;
              })}
            </select>

            {/* Month */}
            <select className="text-primary-800">
              <option selected disabled value="--">
                --
              </option>
              {[...Array(12)].map((_, i) => (
                <option value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>
        </div>
      )}
    </form>
  );
}
