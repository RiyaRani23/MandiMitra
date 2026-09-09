import SellProduceForm from "../../components/farmer/SellProduceForm";

const SellProduce = () => {
  const handleSubmit = (data) => {
    console.log("Produce details:", data);
  };

  return (
    <div className="min-h-screen bg-[#f6f8f5] p-5 sm:p-8">
      {/* Header */}
      <section>
        <p className="text-sm text-gray-500">Farmer Portal</p>

        <h1 className="mt-1 text-2xl font-semibold text-[#123c2c]">
          Sell Your Produce
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
          Tell us about your produce and connect with buyers looking for
          fresh agricultural products.
        </p>
      </section>

      {/* Sell Produce Form */}
      <div className="mt-6">
        <SellProduceForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default SellProduce;