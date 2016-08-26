class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
  end

  def create
    @bench = Bench.create!(bench_params)
    render :show
  end

  def show
    @bench = Bench.find(params[:id])
  end

  private

  def bench_params
    params.require(:bench).permit(:lat, :lng, :descriptiong, :seating)
  end
end
