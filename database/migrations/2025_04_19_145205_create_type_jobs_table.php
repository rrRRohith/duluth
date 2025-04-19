<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('type_jobs', function (Blueprint $table) {
            $table->foreignId('type_id')->constrained('job_types')->cascadeOnDelete();
            $table->foreignId('job_id')->constrained('career_jobs')->cascadeOnDelete();
            $table->primary(['type_id', 'job_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('type_jobs');
    }
};
